import React, {Component, useState} from 'react';

export const Formulaire = (props)=> {
    const longueurMax = 130;
    const [saisie, setSaisie] = useState("");
    const [reste, setReste] = useState("longueurMax")
    const [titre, setTitre] = useState("");

    const CountSaisie = (e) =>{
        setSaisie(e.target.value);
        setReste(longueurMax - saisie.length);
    }
    const titreForm = (e) =>{
        setTitre(e.target.value);
    }
    const valideForm = (e)=>{
        e.preventDefault();
    }

        return (
            <form onSubmit={valideForm}>
                <div className="mb-3">
                    <label htmlFor="titre" className="form-label">Titre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="titre"
                        name="titre"
                        placeholder="Ex : Brief......"
                        aria-describedby="titreHelp"
                    />
                    <div id="titreHelp" className="form-text">
                        Merci de donner un titre clair pourla
                        catégorisation
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="suggestion" className="form-label"
                    >Suggestion</label
                    >
                    <textarea
                        className="form-control"
                        id="suggestion"
                        name="suggestion"
                        rows="3"
                        onChange={CountSaisie}
                    ></textarea>
                    <p style={{color: (reste < 0) ? "red" : "green"}}>
                        Contenu saisi {saisie.length} / 130
                    </p>
                    <p id="text-restant">Il vous reste {reste}</p>
                    <p id="text-restant"></p>
                </div>
                <button
                    type="submit"
                    id="btn-suggestion"
                    className="btn btn-danger float-end"
                >
                    Envoyer
                </button>
            </form>

        );

}


