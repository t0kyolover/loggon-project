import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../store/appContext";



export const PrivacyPolicy = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div class="card mt-5 border-0">
                <div class="card-header" style={{ background: "#992899" }}>

                </div>
                <div class="card-body bg-dark">
                    <h5 class="card-title text-white text-center m-3"><strong>Privacy Policy</strong></h5>
                    <p class="card-text text-white">Fue un personaje para la película Pinocho de Disney y fue diseñado por Ward Kimball, quien estuvo decepcionado ya que gran parte de la labor que realizó para Snow White and the Seven Dwarfs fue cortada de la versión final, por lo que estuvo a punto de abandonar la factoría. Sin embargo, Walt Disney personalmente lo convenció para quedarse y le dio la tarea de diseñar al icono de la conciencia oficial de Pinocho.
                        Voz del personaje

                        Para la voz fue contratado el cantante Cliff Edwards, quien popularizó al personaje, a la película y a toda la compañía con la canción When You Wish Upon a Star o La estrella azul en español.

                        Después de la muerte de Edwards, Eddie Carroll lo reemplazó para futuras apariciones en cortos Disney, y desde el fallecimiento de Carroll en 2010 actualmente es interpretado por Phil Synder.

                        En el mundo hispano estuvo a cargo el actor de doblaje argentino Pablo Palitos para Pinocho. Luego en Fun and Fancy Free es doblado por Edmundo Santos, y después en Mickey's Christmas Carol por José Manuel Rosano, ambos actores mexicanos. Actualmente es doblado por el mexicano Arturo Mercado.

                        En España, ha sido doblado por Miguel Ayones en sus apariciones con doblaje del país.
                        Después de Pinocho

                        Apareció en diversos cortos y especiales de televisión de Disney, así como en una miniserie en la que los niños aprendían cómo deletrear enciclopedias, en el Mickey Mouse Club (U.S.A). También aparece en la atracción Pinocchio's Daring Journey, que se encuentra en tres de los parques de Disney de todo el mundo : Disneyland en el Disneyland Resort (California, U.S.A) , Disneyland (Paris) en Disneyland Resort Paris (Marne-la-Vallée, Francia) y en Tokyo Disneyland en el Tokyo Disney Resort (Urayasu, Chiba, Japón).

                        También aparece en la saga de juegos Kingdom Hearts como el cronista real, apareciendo en casi todos los títulos de la saga. Entre otros videojuegos aparece como guía del jugador en Disney's Villains' Revenge, y como personaje jugable en Disney Magic Kingdoms.2

                        En el remake de acción real de Pinocho de 2022 el personaje es interpretado por Joseph Gordon-Levitt.

                        Voz del personaje

                        Para la voz fue contratado el cantante Cliff Edwards, quien popularizó al personaje, a la película y a toda la compañía con la canción When You Wish Upon a Star o La estrella azul en español.

                        Después de la muerte de Edwards, Eddie Carroll lo reemplazó para futuras apariciones en cortos Disney, y desde el fallecimiento de Carroll en 2010 actualmente es interpretado por Phil Synder.

                        En el mundo hispano estuvo a cargo el actor de doblaje argentino Pablo Palitos para Pinocho. Luego en Fun and Fancy Free es doblado por Edmundo Santos, y después en Mickey's Christmas Carol por José Manuel Rosano, ambos actores mexicanos. Actualmente es doblado por el mexicano Arturo Mercado.

                        En España, ha sido doblado por Miguel Ayones en sus apariciones con doblaje del país.
                        Después de Pinocho

                        Apareció en diversos cortos y especiales de televisión de Disney, así como en una miniserie en la que los niños aprendían cómo deletrear enciclopedias, en el Mickey Mouse Club (U.S.A). También aparece en la atracción Pinocchio's Daring Journey, que se encuentra en tres de los parques de Disney de todo el mundo : Disneyland en el Disneyland Resort (California, U.S.A) , Disneyland (Paris) en Disneyland Resort Paris (Marne-la-Vallée, Francia) y en Tokyo Disneyland en el Tokyo Disney Resort (Urayasu, Chiba, Japón).

                        También aparece en la saga de juegos Kingdom Hearts como el cronista real, apareciendo en casi todos los títulos de la saga. Entre otros videojuegos aparece como guía del jugador en Disney's Villains' Revenge, y como personaje jugable en Disney Magic Kingdoms.2

                        En el remake de acción real de Pinocho de 2022 el personaje es interpretado por Joseph Gordon-Levitt. </p>
                    <div className="mb-3 form-check m-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="newsletterCheck"
                        />
                        <label
                            className="form-check-label text-white"
                            htmlFor="newsletterCheck"
                            style={{ fontSize: "10px" }}
                        >
                            I agree

                        </label>
                    </div>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-2">
                        <button class="btn btn-primary me-md-2 border-0" style={{ background: "#992899" }} type="button">
                            Confirm
                        </button>
                    </div>

                </div>

                <div class="card-footer text-body-secondary text-center" style={{ background: "#992899" }}>

                </div>



            </div>
        </div>

    )
}



