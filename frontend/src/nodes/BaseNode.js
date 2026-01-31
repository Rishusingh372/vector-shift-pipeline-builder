// frontend/src/nodes/BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
  id, 
  data, 
  title, 
  children, 
  inputHandles = [], 
  outputHandles = [],
  width = 200,
  height = 80,
  className = '',
  style = {}
}) => {
  const defaultStyle = {
    backgroundColor: '#ffffff',
    border: '2px solid #4F46E5',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Inter, sans-serif',
    width: width,
    minHeight: height,
    transition: 'all 0.2s ease',
  };

  const headerStyle = {
    backgroundColor: '#4F46E5',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '8px 8px 0 0',
    margin: '-16px -16px 12px -16px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  return (
    <div 
      className={`base-node ${className}`} 
      style={{ ...defaultStyle, ...style }}
    >
      {/* Input Handles */}
      {inputHandles.map((handle, index) => (
        <Handle
          key={`${id}-${handle.id}`}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{
            top: `${(index + 1) * (100 / (inputHandles.length + 1))}%`,
            background: '#4F46E5',
            width: '12px',
            height: '12px',
          }}
        />
      ))}
      
      {/* Node Header */}
      <div style={headerStyle}>
        {title}
      </div>
      
      {/* Node Content */}
      <div style={{ padding: '8px 0' }}>
        {children}
      </div>
      
      {/* Output Handles */}
      {outputHandles.map((handle, index) => (
        <Handle
          key={`${id}-${handle.id}`}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{
            top: `${(index + 1) * (100 / (outputHandles.length + 1))}%`,
            background: '#10B981',
            width: '12px',
            height: '12px',
          }}
        />
      ))}
    </div>
  );
};

// HOC for creating specific node types
export const createNode = (config) => {
  return (props) => (
    <BaseNode
      {...props}
      title={config.title}
      inputHandles={config.inputHandles}
      outputHandles={config.outputHandles}
      width={config.width}
      height={config.height}
      className={config.className}
      style={config.style}
    >
      {config.content(props)}
    </BaseNode>
  );
};