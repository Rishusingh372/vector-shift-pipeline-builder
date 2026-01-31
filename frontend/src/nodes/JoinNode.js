// frontend/src/nodes/JoinNode.js
import { Handle, Position } from 'reactflow';

const JoinNode = ({ data }) => {
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
                backgroundColor: '#ec4899',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px 6px 0 0',
                margin: '-16px -16px 12px -16px',
                fontSize: '14px',
                fontWeight: '600'
            }}>
                🔗 Join
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Join Type
                </div>
                <select
                    defaultValue="concat"
                    style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}
                >
                    <option value="concat">Concatenate</option>
                    <option value="merge">Merge Objects</option>
                    <option value="union">Union</option>
                </select>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Delimiter
                </div>
                <input
                    type="text"
                    defaultValue=", "
                    placeholder="Delimiter..."
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
                id="input1"
                style={{
                    background: '#ec4899',
                    width: '12px',
                    height: '12px',
                    top: '30%'
                }}
            />
            
            <Handle
                type="target"
                position={Position.Left}
                id="input2"
                style={{
                    background: '#ec4899',
                    width: '12px',
                    height: '12px',
                    top: '70%'
                }}
            />
            
            <Handle
                type="source"
                position={Position.Right}
                style={{
                    background: '#ec4899',
                    width: '12px',
                    height: '12px'
                }}
            />
        </div>
    );
};

export { JoinNode };