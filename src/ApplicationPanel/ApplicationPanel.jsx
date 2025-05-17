import React from 'react';
import { Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import "../index.css";
import "./applicationPanel.css";
import NavigationPanelMin from "../ComponentFolder/NavigationPanel/NavigationPanelMin.jsx";
import NavigationPanelMax from "../ComponentFolder/NavigationPanel/NavigationPanelMax.jsx";
import MainPanelApplication from '../ComponentFolder/MainPanelApplication/MainPanelApplication.jsx';




const ApplicationPanel = () => {
    return (
        <>
            <div className="application-panel-container">
                <NavigationPanelMin />
                <NavigationPanelMax />
                <MainPanelApplication />
            </div>
        </>
    );
} 


export default ApplicationPanel;