// frontend/src/ui.js
import { useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';


// Import only basic nodes
import { InputNode } from './nodes/inputNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { MathNode } from './nodes/MathNode';
import { FilterNode } from './nodes/FilterNode';
import { JoinNode } from './nodes/JoinNode';
import { DelayNode } from './nodes/DelayNode';
import { TransformNode } from './nodes/TransformNode';

import 'reactflow/dist/style.css';

const nodeTypes = {
    customInput: InputNode,
    customOutput: OutputNode,
    text: TextNode,
    math: MathNode,
    filter: FilterNode,
    join: JoinNode,
    delay: DelayNode,
    transform: TransformNode,
};

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    getNodeID: state.getNodeID,
    addNode: state.addNode,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
});

const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const {
        nodes,
        edges,
        getNodeID,
        addNode,
        onNodesChange,
        onEdgesChange,
        onConnect,
    } = useStore(selector, shallow);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback((event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
        
        if (typeof type === 'undefined' || !type) {
            return;
        }

        const position = {
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        };

        const nodeID = getNodeID(type);
        const newNode = {
            id: nodeID,
            type,
            position,
            data: { id: nodeID, nodeType: type },
        };

        addNode(newNode);
    }, [getNodeID, addNode]);

    return (
        <div 
            ref={reactFlowWrapper}
            style={{ 
                width: '100%', 
                height: '70vh',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                backgroundColor: '#f9fafb'
            }}
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                nodeTypes={nodeTypes}
                fitView
                defaultEdgeOptions={{
                    type: 'smoothstep',
                    style: { strokeWidth: 2, stroke: '#3b82f6' },
                }}
            >
                <Background 
                    color="#9ca3af" 
                    gap={16}
                    size={1}
                />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export { PipelineUI };