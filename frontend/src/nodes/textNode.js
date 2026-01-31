// frontend/src/nodes/TextNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

const TextNode = ({ data }) => {
    const [text, setText] = useState(data?.text || 'Enter text...');
    
    // Simple variable extraction
    const extractVariables = (inputText) => {
        const varRegex = /{{([^{}]+)}}/g;
        const matches = [...inputText.matchAll(varRegex)];
        return [...new Set(matches.map(match => 
            match[1].trim().replace(/[^a-zA-Z0-9_]/g, '_')
        ))];
    };

    const variables = extractVariables(text);
    const handleTextChange = (e) => setText(e.target.value);

    return (
        <div style={{
            backgroundColor: 'white',
            border: '2px solid #10b981',
            borderRadius: '8px',
            padding: '16px',
            minWidth: '250px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{
                backgroundColor: '#10b981',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px 6px 0 0',
                margin: '-16px -16px 12px -16px',
                fontSize: '14px',
                fontWeight: '600'
            }}>
                📝 Text
            </div>
            
            <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    Content
                </div>
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    style={{
                        width: '100%',
                        minHeight: '80px',
                        padding: '8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px',
                        resize: 'vertical'
                    }}
                    placeholder="Use {{variable}} for variables"
                />
            </div>

            {variables.length > 0 && (
                <div style={{
                    fontSize: '11px',
                    color: '#6b7280',
                    backgroundColor: '#f3f4f6',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    marginTop: '8px'
                }}>
                    Variables: {variables.join(', ')}
                </div>
            )}
            
            <Handle
                type="source"
                position={Position.Right}
                style={{
                    background: '#10b981',
                    width: '12px',
                    height: '12px'
                }}
            />
        </div>
    );
};

export { TextNode };