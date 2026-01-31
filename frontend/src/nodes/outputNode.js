// frontend/src/nodes/OutputNode.js
import { Handle, Position } from 'reactflow';

const OutputNode = ({ data }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            border: '2px solid #ef4444',
            borderRadius: '8px',
            padding: '16px',
            minWidth: '200px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{
                backgroundColor: '#ef4444',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px 6px 0 0',
                margin: '-16px -16px 12px -16px',
                fontSize: '14px',
                fontWeight: '600'
            }}>
                📤 Output
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Name
                </div>
                <input
                    type="text"
                    defaultValue="Output"
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
                type="target"
                position={Position.Left}
                style={{
                    background: '#ef4444',
                    width: '12px',
                    height: '12px'
                }}
            />
        </div>
    );
};

export { OutputNode };