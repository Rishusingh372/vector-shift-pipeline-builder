// frontend/src/App.js
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f1f5f9',
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{
                    padding: '24px',
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <h1 style={{ 
                        margin: '0 0 8px 0',
                        fontSize: '24px',
                        fontWeight: '700'
                    }}>
                        VectorShift Pipeline Builder
                    </h1>
                    <p style={{ margin: 0, opacity: 0.9 }}>
                        Drag and drop nodes to create your AI pipeline
                    </p>
                </div>
                
                <PipelineToolbar />
                <PipelineUI />
                <SubmitButton />
            </div>
        </div>
    );
}

export default App;