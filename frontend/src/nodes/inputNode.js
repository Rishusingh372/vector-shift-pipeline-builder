// frontend/src/nodes/InputNode.js
import { Handle, Position } from 'reactflow';

const InputNode = ({ data }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            border: '2px solid #4f46e5',
            borderRadius: '8px',
            padding: '16px',
            minWidth: '200px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{
                backgroundColor: '#4f46e5',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px 6px 0 0',
                margin: '-16px -16px 12px -16px',
                fontSize: '14px',
                fontWeight: '600'
            }}>
                📥 Input
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Name
                </div>
                <input
                    type="text"
                    defaultValue="Input"
                    style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}
                />
            </div>
            
            <Handle
                type="source"
                position={Position.Right}
                style={{
                    background: '#4f46e5',
                    width: '12px',
                    height: '12px'
                }}
            />
        </div>
    );
};

export { InputNode };