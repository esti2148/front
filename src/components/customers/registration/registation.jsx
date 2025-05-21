
// import '../registration/registation.css'

// import { useState } from "react"
// import { addCustomerThunk } from "../../../redux/customerSlice/addCustomerThunk"
// import { useDispatch, useSelector } from "react-redux";
// import { wait } from "@testing-library/user-event/dist/utils";
// import { useNavigate, useParams } from 'react-router-dom';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// //בעיות השם בתפריט כאשר משהו חדש נרשם לא מראה 
// //וגם לא רואים את הקוד של המוסד בהרשמה
// export const Registration = () => {
//     const nav = useNavigate()
//     const parms = useParams()
    
//     const [newUser, setNewuser] = useState({ instituteName: parms.userName, address: "", sellingPlace: "", phone: "", email: "" })
//     const dispatch = useDispatch();
//     const [flagCode, setFalgCode] = useState(false)

//     const current = useSelector(state => state.customer.currentCustomer)
//     const isexist = useSelector(state => state.customer.isExist)

//     const save = async () => {

//         dispatch(addCustomerThunk(newUser))
//         setFalgCode(true)
       
//     }
//     const next = () => {
//         nav(`/`)
//     }

//     return <div> <dialog open className="loginn">

//         <section className='logsec'>
//             <header className='logheader'> הרשמה</header>

//             <div className='logpack'>
                
//                 <Box
//                     component="form"
//                     sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <TextField id="outlined-basic"  className='loginp' label="שם" variant="outlined" defaultValue={parms.userName} onChange={(e) => setNewuser({ ...newUser, instituteName: e.target.value })} />
//                 </Box>
//             </div>
//             <br></br>

//             <div className='logpack'>
                
//                     <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label=" כתובת" variant="outlined" className='loginp' onChange={(e) => setNewuser({ ...newUser, address: e.target.value })} />
//     </Box>
//             </div>
//             <div className='logpack'>
              
//                    <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label=" מקום המכירה" variant="outlined" className='loginp' onChange={(e) => setNewuser({ ...newUser, sellingPlace: e.target.value })} />
//     </Box>
//             </div>
//             <div className='logpack'>
               
//                    <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="טלפון" variant="outlined"className='loginp' onChange={(e) => setNewuser({ ...newUser, phone: e.target.value })}  />
//     </Box>
//             </div>
//             <div className='logpack'>
               
//                    <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label=" מייל" variant="outlined" className='loginp' onChange={(e) => setNewuser({ ...newUser, email: e.target.value })}/>
//     </Box>
//             </div>
//             <div className='DLOG'>
//                 <button className='logbut' hidden={flagCode} onClick={save}>ok</button>
//                 <button className='logbut' hidden={!flagCode} onClick={next}>next</button></div>
//             <div className='codeuser' hidden={!flagCode}>סיסמת המוסד שלך לכניסה:{current?.instituteId}</div>
//         </section>
//         <img className='logo' src="/images.png" alt="image not found"></img>


//     </dialog>
//     </div>
// }


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { addCustomerThunk } from "../../../redux/customerSlice/addCustomerThunk";
import schoolImage from '../../img/school/1.jpg';

import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container,
  Card,
  CardContent,
  CardMedia,
  InputAdornment,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Divider,
  Chip,
  Fade,
  Zoom,
  Alert
} from '@mui/material';

import {
  School as SchoolIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Store as StoreIcon,
  Check as CheckIcon,
  ArrowBack as ArrowBackIcon,
  VpnKey as VpnKeyIcon
} from '@mui/icons-material';

import './registration.css';

export const Registration = () => {
  const nav = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  
  const [activeStep, setActiveStep] = useState(0);
  const [newUser, setNewUser] = useState({ 
    instituteName: params.userName || "", 
    address: "", 
    sellingPlace: "", 
    phone: "", 
    email: "" 
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const current = useSelector(state => state.customer.currentCustomer);
  const isexist = useSelector(state => state.customer.isExist);
  const loading = useSelector(state => state.customer.loading);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!newUser.instituteName.trim()) {
      newErrors.instituteName = "שם מוסד הוא שדה חובה";
    }
    
    if (!newUser.address.trim()) {
      newErrors.address = "כתובת היא שדה חובה";
    }
    
    if (!newUser.phone.trim()) {
      newErrors.phone = "מספר טלפון הוא שדה חובה";
    } else if (!/^\d{9,10}$/.test(newUser.phone.trim())) {
      newErrors.phone = "מספר טלפון לא תקין";
    }
    
    if (newUser.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newUser.email)) {
      newErrors.email = "כתובת אימייל לא תקינה";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  
  const handleSave = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      dispatch(addCustomerThunk(newUser));
      setActiveStep(1);
    }
  };

  const handleNext = () => {
    nav(`/`);
  };

  const handleBack = () => {
    nav('/login');
  };

  useEffect(() => {
    if (current?.instituteId) {
      setIsSubmitting(false);
    }
  }, [current]);

  return (
    <Container className="registration-container">
      <Fade in={true} timeout={800}>
        <Card className="registration-card">
          <CardContent className="registration-content">
            <Box className="registration-header">
              <Typography variant="h4" component="h1" className="registration-title">
                <SchoolIcon className="registration-title-icon" />
                הרשמה למערכת
              </Typography>
              
              <Stepper activeStep={activeStep} alternativeLabel className="registration-stepper">
                <Step>
                  <StepLabel>מילוי פרטים</StepLabel>
                </Step>
                <Step>
                  <StepLabel>אישור הרשמה</StepLabel>
                </Step>
              </Stepper>
            </Box>
            
            <Divider className="registration-divider">
              <Chip label={activeStep === 0 ? "פרטי המוסד" : "הרשמה הושלמה"} color="primary" />
            </Divider>
            
            {activeStep === 0 ? (
              <Box className="registration-form">
                <TextField
                  fullWidth
                  required
                  label="שם מוסד"
                  variant="outlined"
                  value={newUser.instituteName}
                  onChange={(e) => setNewUser({ ...newUser, instituteName: e.target.value })}
                  className="registration-input"
                  error={!!errors.instituteName}
                  helperText={errors.instituteName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <TextField
                  fullWidth
                  required
                  label="כתובת"
                  variant="outlined"
                  value={newUser.address}
                  onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
                  className="registration-input"
                  error={!!errors.address}
                  helperText={errors.address}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <TextField
                  fullWidth
                  label="מקום המכירה"
                  variant="outlined"
                  value={newUser.sellingPlace}
                  onChange={(e) => setNewUser({ ...newUser, sellingPlace: e.target.value })}
                  className="registration-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <StoreIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <TextField
                  fullWidth
                  required
                  label="טלפון"
                  variant="outlined"
                  value={newUser.phone}
                  onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                  className="registration-input"
                  error={!!errors.phone}
                  helperText={errors.phone}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <TextField
                  fullWidth
                  label="דואר אלקטרוני"
                  variant="outlined"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="registration-input"
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <Box className="registration-actions">
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleBack}
                    className="back-button"
                    startIcon={<ArrowBackIcon />}
                  >
                    חזרה
                  </Button>
                  
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    disabled={isSubmitting}
                    className="save-button"
                    startIcon={isSubmitting ? null : <CheckIcon />}
                  >
                    {isSubmitting ? "מעבד..." : "שמירה והרשמה"}
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box className="registration-success">
                <Zoom in={true} timeout={500}>
                  <Paper elevation={3} className="success-paper">
                    <CheckIcon className="success-icon" />
                    <Typography variant="h5" className="success-title">
                      ההרשמה הושלמה בהצלחה!
                    </Typography>
                    
                    <Alert severity="info" className="institute-id-alert">
                      <Box className="institute-id-container">
                        <Typography variant="body1" className="institute-id-label">
                          קוד המוסד שלך להתחברות:
                        </Typography>
                        <Chip
                          icon={<VpnKeyIcon />}
                          label={current?.instituteId}
                          color="primary"
                          variant="outlined"
                          className="institute-id-chip"
                        />
                      </Box>
                      <Typography variant="body2" className="institute-id-note">
                        שמור את הקוד הזה - תצטרך אותו בכל התחברות למערכת
                      </Typography>
                    </Alert>
                    
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className="continue-button"
                      fullWidth
                    >
                      המשך למערכת
                    </Button>
                  </Paper>
                </Zoom>
              </Box>
            )}
          </CardContent>
          
          <CardMedia
            component="img"
            className="registration-image"
            image={schoolImage}
            alt="רקע הרשמה"
            // src="/images.png"
          />
        </Card>
      </Fade>
    </Container>
  );
};
