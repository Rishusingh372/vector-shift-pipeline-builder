// frontend/src/nodes/MathNode.js
import { Handle, Position } from 'reactflow';

const MathNode = ({ data }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            border: '2px solid #f59e0b',
            borderRadius: '8px',
            padding: '16px',
            minWidth: '200px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{
                backgroundColor: '#f59e0b',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px 6px 0 0',
                margin: '-16px -16px 12px -16px',
                fontSize: '14px',
                fontWeight: '600'
            }}>
                🧮 Math
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Operation
                </div>
                <select
                    defaultValue="add"
                    style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}
                >
                    <option value="add">Add (+)</option>
                    <option value="subtract">Subtract (-)</option>
                    <option value="multiply">Multiply (×)</option>
                    <option value="divide">Divide (÷)</option>
                </select>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Value
                </div>
                <input
                    type="number"
                    defaultValue="0"
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
                    background: '#f59e0b',
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
                    background: '#f59e0b',
                    width: '12px',
                    height: '12px',
                    top: '70%'
                }}
            />
            
            <Handle
                type="source"
                position={Position.Right}
                style={{
                    background: '#f59e0b',
                    width: '12px',
                    height: '12px'
                }}
            />
        </div>
    );
};

export { MathNode };