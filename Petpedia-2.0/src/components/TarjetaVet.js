import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";

import './TarjetaVet.css';

import MapIcon from '@mui/icons-material/Map';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function TarjetaVetComponent({ Posts }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='contenedorInfo'>
        <div class="grid">
            <div class="row casillas">
                {Posts.map((post) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    P
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={post.titulo}
                            subheader={post.usuario.comuna.nombreComuna}
                        />

                        <div className='imagenVet'>
                            <img
                                height="230"
                                src={post.url}
                                alt='imagenVeterinaria' />
                        </div>

                        <CardContent>

                            <Typography variant="body2" color="text.secondary">
                                {post.contenido}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="Ver mas"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>

                                <div className='contenedorInfo'>

                                    <h1>awawa</h1>

                                </div>

                                <div className='contenedorInfo'>

                                    <IconButton aria-label="Ubicacion">
                                        <MapIcon />
                                    </IconButton>
                                    <Typography paragraph>
                                        {post.ubicacion}
                                    </Typography>

                                </div>

                                <div className='contenedorInfo'>


                                    <IconButton aria-label="Horario">
                                        <AccessTimeIcon />
                                    </IconButton>
                                    <Typography paragraph>
                                        {post.horario}
                                    </Typography>


                                </div>

                                <div className='contenedorInfo'>

                                    <IconButton aria-label="Ubicacion">
                                        <PermContactCalendarIcon />
                                    </IconButton>
                                    <Typography paragraph>
                                        {post.contacto}

                                    </Typography>

                                </div>


                                <div className='contenedorInfo'>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur...
                                    </Typography>
                                </div>
                                <button
                                    type="button"
                                    class="btn btn-success">
                                    Ver mas
                                </button>
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}

            </div>
        </div>
        </div>
    );

};