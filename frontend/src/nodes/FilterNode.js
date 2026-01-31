// frontend/src/nodes/FilterNode.js
import { Handle, Position } from 'reactflow';

const FilterNode = ({ data }) => {
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
                backgroundColor: '#8b5cf6',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px 6px 0 0',
                margin: '-16px -16px 12px -16px',
                fontSize: '14px',
                fontWeight: '600'
            }}>
                🔍 Filter
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Condition
                </div>
                <select
                    defaultValue="equals"
                    style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}
                >
                    <option value="equals">Equals</option>
                    <option value="contains">Contains</option>
                    <option value="greater">Greater Than</option>
                    <option value="less">Less Than</option>
                </select>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Value
                </div>
                <input
                    type="text"
                    defaultValue=""
                    placeholder="Filter value..."
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
                    background: '#8b5cf6',
                    width: '12px',
                    height: '12px'
                }}
            />
            
            <Handle
                type="source"
                position={Position.Right}
                id="filtered"
                style={{
                    background: '#8b5cf6',
                    width: '12px',
                    height: '12px',
                    top: '30%'
                }}
            />
            
            <Handle
                type="source"
                position={Position.Right}
                id="rejected"
                style={{
                    background: '#8b5cf6',
                    width: '12px',
                    height: '12px',
                    top: '70%'
                }}
            />
        </div>
    );
};

export { FilterNode };