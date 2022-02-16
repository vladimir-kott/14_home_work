import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import qualitieService from "../services/qualitie.service";
import { toast } from "react-toastify";

const QualitieContext = React.createContext();

export const useQualities = () => {
    return useContext(QualitieContext);
};

export const QualitieProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getQualitiesList();
    }, []);
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    function getQualitie(id) {
        return qualities.find((p) => p._id === id.id);
    }

    async function getQualitiesList() {
        const { content } = await qualitieService.fetchAll();
        setQualities(content);
        setLoading(false);
    }

    return (
        <QualitieContext.Provider
            value={{ isLoading, qualities, getQualitie }}
        >
            {children}
        </QualitieContext.Provider>
    );
};

QualitieProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
