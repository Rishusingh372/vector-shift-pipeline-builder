// frontend/src/draggableNode.js
export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const getColor = () => {
    switch(type) {
        case 'customInput': return '#4f46e5';
        case 'customOutput': return '#ef4444';
        case 'text': return '#10b981';
        case 'math': return '#f59e0b';
        case 'filter': return '#8b5cf6';
        case 'join': return '#ec4899';
        case 'delay': return '#14b8a6';
        case 'transform': return '#f97316';
        default: return '#6b7280';
    }
};

    return (
        <div
            draggable
            onDragStart={(e) => onDragStart(e, type)}
            style={{
                cursor: 'grab',
                backgroundColor: getColor(),
                color: 'white',
                padding: '12px 20px',
                borderRadius: '8px',
                fontWeight: '500',
                fontSize: '14px',
                textAlign: 'center',
                minWidth: '100px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                userSelect: 'none'
            }}
        >
            {label}
        </div>
    );
};