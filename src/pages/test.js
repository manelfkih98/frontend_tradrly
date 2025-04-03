import React, { useEffect, useState } from "react";
import axios from "axios";
import { Survey } from "survey-react-ui";
import "survey-core/modern.min.css";
import { Model } from "survey-core";

const Test = () => {
    const [surveyJson, setSurveyJson] = useState(null);


    useEffect(() => {
        axios.get("http://localhost:5000/tradrly/api/v1/question/getAllQuestion")

            .then(response => {
                console.log(response.data.questionsFind)
               
                const surveyData = {
                    title: "Quiz",
                    pages: [{
                        elements: response.data.questionsFind.map((q, index) => ({
                            type: q.propositions && q.propositions.length > 0 ? "radiogroup" : "text",
                            name: `q${index}`,
                            title: q.questionText,
                            choices: q.propositions && q.propositions.length > 0 ? q.propositions : undefined,
                            correctAnswer: q.reponse
                        }))
                    }]
                };
                setSurveyJson(surveyData);
            })
            .catch(error => console.error("Erreur lors du chargement des questions :", error));
    
       
    }, []);
    

    const handleComplete = (survey) => {
        const userResponses = survey.data;
        let correctCount = 0;
    
        surveyJson.pages[0].elements.forEach((question) => {
            if (userResponses[question.name] === question.correctAnswer) {
                correctCount++;
            }
        });
    
        console.log("Nombre de réponses correctes :", correctCount);
        alert(`Vous avez ${correctCount} réponses correctes sur ${surveyJson.pages[0].elements.length}.`);
    
        axios.put("http://localhost:5000/tradrly/api/v1/qcm/updateResultat/67c031938675498e041c7131", {
           
            resultatQcm: correctCount
        })
        .then(() => alert("Résultats enregistrés !"))
        .catch(err => console.error("Erreur :", err));
    };
    

    return (
        <div>
           
           
           
                <div>
                    {surveyJson && <Survey model={new Model(surveyJson)} onComplete={handleComplete} />}
                </div>
            
        </div>
    );
};

export default Test;
