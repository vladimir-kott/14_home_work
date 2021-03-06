import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualitie";

const Quality = (id) => {
    const { getQualitie } = useQualities();
    const { _id, color, name } = getQualitie(id);
    return (
        <span className={"badge m-1 bg-" + color} key={_id}>
            {name}
        </span>
    );
};
Quality.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Quality;
