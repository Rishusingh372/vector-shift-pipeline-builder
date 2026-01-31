// frontend/src/store.js
import { create } from "zustand";
import {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    MarkerType,
} from 'reactflow';

const useStore = create((set, get) => ({
    nodes: [],
    edges: [],
    nodeIDs: {},
    
    getNodeID: (type) => {
        const newIDs = {...get().nodeIDs};
        if (newIDs[type] === undefined) {
            newIDs[type] = 0;
        }
        newIDs[type] += 1;
        set({nodeIDs: newIDs});
        return `${type}-${newIDs[type]}`;
    },
    
    addNode: (node) => {
        set((state) => ({
            nodes: [...state.nodes, node]
        }));
    },
    
    onNodesChange: (changes) => {
        set((state) => ({
            nodes: applyNodeChanges(changes, state.nodes),
        }));
    },
    
    onEdgesChange: (changes) => {
        set((state) => ({
            edges: applyEdgeChanges(changes, state.edges),
        }));
    },
    
    onConnect: (connection) => {
        set((state) => ({
            edges: addEdge({
                ...connection, 
                type: 'smoothstep', 
                animated: true, 
                style: { strokeWidth: 2, stroke: '#4F46E5' },
                markerEnd: {
                    type: MarkerType.ArrowClosed, 
                    height: '20px', 
                    width: '20px',
                    color: '#4F46E5'
                }
            }, state.edges),
        }));
    },
    
    updateNodeField: (nodeId, fieldName, fieldValue) => {
        set((state) => {
            const newNodes = state.nodes.map(node => {
                if (node.id === nodeId) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            [fieldName]: fieldValue
                        }
                    };
                }
                return node;
            });
            return { nodes: newNodes };
        });
    },
    
    clearPipeline: () => {
        set({
            nodes: [],
            edges: [],
            nodeIDs: {}
        });
    }
}));

export { useStore };