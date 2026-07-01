

export function renderPluginDashboardView(root, plugins){

    root.innerHTML = `
        <h2>Platform Plugins</h2>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Version</th>
                    <th>Slot</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>

            ${plugins.map(plugin => `
                    <tr>
                        <td>${plugin.id}</td>
                        <td>${plugin.version}</td>
                        </td>${plugin.slot}</td>
                        
                        <td>
                            ${
                                plugin.mounted 
                                    ? "🟢 Mounted"
                                    : "🔴 Unmounted"
                            }
                        </td>

                        <td>
                            
                            ${
                                plugin.id === "plugin-dashboard"
                                ? "-"
                                : `
                                    <button data-plugin="${plugin.id}">
                                    ${ plugin.mounted
                                            ? "Unmount"
                                            : "Mount"
                                    }
                                    </button>
                                `
                            }
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table
    `
};