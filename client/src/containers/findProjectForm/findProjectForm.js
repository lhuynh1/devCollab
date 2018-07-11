import React, {Component} from "react";
import Checkbox from "../components/Checkbox";


class findProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state= {
            interests: [],
            skills: []
        };
        this.handleInterestsSelection=this.handleInterestsSelection.bind(this);
        this.handleSkillsSelection=this.handleSkillsSelection.bind(this);
    }

    componentDidMount() {
        fetch("./findProject.json")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    selectedInterests: data.selectedInterests,
                    selectedSkills: data.selectedSkills
                });
            });
    }
}