import axios from "axios";

export default {
    // Save a submitted project into the database
    saveProjects: function() {
        return axios.post("/api/projects", projectData);
    }
};