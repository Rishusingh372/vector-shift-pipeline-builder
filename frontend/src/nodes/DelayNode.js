// frontend/src/nodes/DelayNode.js
import { Handle, Position } from 'reactflow';

const DelayNode = ({ data }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            border: '2px solid #8b5cf6',
            borderRadius: '8px',
            padding: '16px',
            minWidth: '200px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{
                backgroundColor: '#14b8a6',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px 6px 0 0',
                margin: '-16px -16px 12px -16px',
                fontSize: '14px',
                fontWeight: '600'
            }}>
                ⏱️ Delay
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Delay (ms)
                </div>
                <input
                    type="number"
                    defaultValue="1000"
                    min="0"
                    style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}
                />
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Unit
                </div>
                <select
                    defaultValue="ms"
                    style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}
                >
                    <option value="ms">Milliseconds</option>
                    <option value="s">Seconds</option>
                </select>
            </div>
            
            <Handle
                type="target"
                position={Position.Left}
                style={{
                    background: '#14b8a6',
                    width: '12px',
                    height: '12px'
                }}
            />
            
            <Handle
                type="source"
                position={Position.Right}
                style={{
                    background: '#14b8a6',
                    width: '12px',
                    height: '12px'
                }}
            />
        </div>
    );
};

export { DelayNode };