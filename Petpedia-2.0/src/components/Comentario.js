import React from "react";
import "./Comentario.css"
import avatar from "../img/PetFoot1.png"
import avatar2 from "../img/PetFoot3.png"

const ComentarioComponent = () => {
    return (
        <div class="container mt-5 mb-5">
        <div class="row height d-flex justify-content-center align-items-center">
            <div class="col-md-7">
                <div class="card">
                    <div class="p-3">
                        <h6>Comentarios</h6>
                    </div>
                    <div class="mt-3 d-flex flex-row align-items-center p-3 form-color"> <img src={avatar} width="50" class="rounded-circle mr-2"/> <input type="text" class="form-control" placeholder="Ingresa tu comentario aquí"/> <a class="btn" href="" target="_blank">Enviar</a> </div>

                    <div class="mt-2">
                        <div class="d-flex flex-row p-3"> <img src={avatar} width="50" height="40" class="rounded-circle mr-3"/>
                            <div class="w-100">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex flex-row align-items-center"> <span class="mr-2">Juan Perez</span>  </div> <small>3 days ago</small>
                                </div>
                                <p class="text-justify comment-text mb-0">Excelente atención con el doctor Roberto, mi perrito llego muy mal con vomitos, y se fue mejor, ahora estamos mas tranquilos. Gracias !!</p>
                                <div class="d-flex flex-row user-feed"> <span class="wish"><i class="fa fa-heartbeat mr-2"></i>24 </span> <span class="ml-3"><i class="fa fa-comments-o mr-2"></i> - Reply</span> </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row p-3"> <img src={avatar2} width="40" height="40" class="rounded-circle mr-3"/>
                            <div class="w-100">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex flex-row align-items-center"> <span class="mr-2">Javiera Ruiz</span> </div> <small>10 days ago</small>
                                </div>
                                <p class="text-justify comment-text mb-0">Super recomendada la clinica, muy limpio y buen trato a los animales. Precios super accesibles!!</p>
                                <div class="d-flex flex-row user-feed"> <span class="wish"><i class="fa fa-heartbeat mr-2"></i>14</span> <span class="ml-3"> <i class="fa fa-comments-o mr-2"></i>- Reply</span> </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row p-3"> <img src={avatar} width="40" height="40" class="rounded-circle mr-3"/>
                            <div class="w-100">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex flex-row align-items-center"> <span class="mr-2">Maria Gutierrez</span> </div> <small>20 days ago</small>
                                </div>
                                <p class="text-justify comment-text mb-0"> Me encanto el lugar, fuimos por un corte para mi perrita yorkshire y quedamos super conformes con el trato, mi perrita esta lista para el verano. Los recomiendo!!</p>
                                <div class="d-flex flex-row user-feed"> <span class="wish"><i class="fa fa-heartbeat mr-2"></i>54</span> <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>- Reply</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };
  
  export default ComentarioComponent;