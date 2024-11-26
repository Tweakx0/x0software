// InteractiveTitle.js
import React, { useState, useEffect } from 'react';

// [Previous InteractiveTitle component code goes here]

// Then modify your script.js to include the rendering:
document.addEventListener('DOMContentLoaded', () => {
    // Your existing initialization code
    renderMods();
    updateDiscordLinks();
    
    // Add the new title renders
    const titleSection = document.getElementById('titleSection');
    if (titleSection) {
        const root = ReactDOM.createRoot(titleSection);
        root.render(
            <div className="space-y-8">
                <InteractiveTitle variant="primary" className="text-2xl font-bold mb-6">
                    Featured Mods
                </InteractiveTitle>
                
                <InteractiveTitle variant="secondary" className="text-2xl font-bold mb-6">
                    Recent Updates
                </InteractiveTitle>
                
                <InteractiveTitle variant="accent" className="text-2xl font-bold mb-6">
                    User Reviews
                </InteractiveTitle>
                
                <InteractiveTitle variant="primary" className="text-2xl font-bold mb-6">
                    Why Trust X0Software?
                </InteractiveTitle>
            </div>
        );
    }
});