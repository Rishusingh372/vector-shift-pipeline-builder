// frontend/src/submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);
    
    const handleSubmit = async () => {
        if (nodes.length === 0) {
            alert('Please add at least one node.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });
            
            const data = await response.json();
            alert(`Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
        } catch (error) {
            alert('Backend not running. Please start the Node.js backend.');
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            gap: '16px'
        }}>
            <div style={{
                color: '#4b5563',
                fontSize: '14px'
            }}>
                {nodes.length} nodes, {edges.length} connections
            </div>
            <button
                onClick={handleSubmit}
                style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
};