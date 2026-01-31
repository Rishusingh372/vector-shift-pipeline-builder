// frontend/src/nodes/TransformNode.js
import { Handle, Position } from 'reactflow';

const TransformNode = ({ data }) => {
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
                backgroundColor: '#f97316',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px 6px 0 0',
                margin: '-16px -16px 12px -16px',
                fontSize: '14px',
                fontWeight: '600'
            }}>
                🔄 Transform
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Transformation
                </div>
                <select
                    defaultValue="uppercase"
                    style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}
                >
                    <option value="uppercase">Uppercase</option>
                    <option value="lowercase">Lowercase</option>
                    <option value="trim">Trim</option>
                    <option value="reverse">Reverse</option>
                </select>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Custom Function (Optional)
                </div>
                <textarea
                    placeholder="(x) => x.toUpperCase()"
                    style={{
                        width: '100%',
                        minHeight: '60px',
                        padding: '6px 8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        resize: 'vertical'
                    }}
                />
            </div>
            
            <Handle
                type="target"
                position={Position.Left}
                style={{
                    background: '#f97316',
                    width: '12px',
                    height: '12px'
                }}
            />
            
            <Handle
                type="source"
                position={Position.Right}
                style={{
                    background: '#f97316',
                    width: '12px',
                    height: '12px'
                }}
            />
        </div>
    );
};

export { TransformNode };