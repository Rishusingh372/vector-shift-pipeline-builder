// frontend/src/toolbar.js
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f8fafc',
      borderBottom: '1px solid #e2e8f0'
    }}>
      <h3 style={{
        margin: '0 0 16px 0',
        color: '#1e293b',
        fontSize: '16px',
        fontWeight: '600'
      }}>
        Drag & Drop Nodes
      </h3>
      <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='math' label='Math' />
        <DraggableNode type='filter' label='Filter' />
        <DraggableNode type='join' label='Join' />
        <DraggableNode type='delay' label='Delay' />
        <DraggableNode type='transform' label='Transform' />
      </div>
    </div>
  );
};