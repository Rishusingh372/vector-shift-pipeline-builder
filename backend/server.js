// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // React frontend URL
    credentials: true
}));
app.use(bodyParser.json());

// Helper function to check if graph is DAG (Kahn's algorithm)
function isDAG(nodes, edges) {
    // Create adjacency list and in-degree map
    const adj = {};
    const inDegree = {};
    
    // Initialize
    nodes.forEach(node => {
        adj[node.id] = [];
        inDegree[node.id] = 0;
    });
    
    // Build graph
    edges.forEach(edge => {
        if (adj[edge.source] && adj[edge.target]) {
            adj[edge.source].push(edge.target);
            inDegree[edge.target] = (inDegree[edge.target] || 0) + 1;
        }
    });
    
    // Find nodes with no incoming edges
    const queue = [];
    Object.keys(inDegree).forEach(nodeId => {
        if (inDegree[nodeId] === 0) {
            queue.push(nodeId);
        }
    });
    
    let visitedCount = 0;
    
    // Process nodes
    while (queue.length > 0) {
        const current = queue.shift();
        visitedCount++;
        
        const neighbors = adj[current] || [];
        neighbors.forEach(neighbor => {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        });
    }
    
    // If we visited all nodes, it's a DAG
    return visitedCount === nodes.length;
}

// Pipeline parse endpoint
app.post('/pipelines/parse', (req, res) => {
    try {
        const { nodes, edges } = req.body;
        
        if (!Array.isArray(nodes) || !Array.isArray(edges)) {
            return res.status(400).json({
                error: 'Invalid request format. Expected nodes and edges arrays.'
            });
        }
        
        const num_nodes = nodes.length;
        const num_edges = edges.length;
        const is_dag = isDAG(nodes, edges);
        
        res.json({
            num_nodes,
            num_edges,
            is_dag
        });
        
    } catch (error) {
        console.error('Error processing pipeline:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'VectorShift Pipeline API'
    });
});

// Pipeline stats endpoint
app.get('/pipelines/stats', (req, res) => {
    res.json({
        total_endpoints: 2,
        endpoints: [
            {
                method: 'POST',
                path: '/pipelines/parse',
                description: 'Parse pipeline and check if DAG'
            },
            {
                method: 'GET',
                path: '/health',
                description: 'Health check'
            }
        ]
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Endpoint not found',
        path: req.path,
        method: req.method
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 VectorShift Backend running on port ${PORT}`);
    console.log(`📝 API available at http://localhost:${PORT}`);
    console.log(`🔗 Pipeline parse endpoint: POST http://localhost:${PORT}/pipelines/parse`);
    console.log(`❤️  Health check: GET http://localhost:${PORT}/health`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});