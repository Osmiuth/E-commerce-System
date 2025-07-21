import React from 'react'; // Add missing import statement
import Sidebar from '../../components/Sidebar.jsx';



function Admin() {
    return (
        <div> {/* Wrap the JSX elements inside a parent div */}
            <Sidebar></Sidebar>

            <div className="main-content" style={{ textAlign: 'center' }}>
                <h1>Summary</h1>
                <p>This is the main content area.</p>
                
            </div>
        </div>
    );
}

export default Admin;