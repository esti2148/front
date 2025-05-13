// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import '../logOn/logOn.css'
// import { useEffect, useState } from 'react'
// import { useDispatch } from "react-redux";
// import { getByNameCustomerThunk } from '../../../redux/customerSlice/getByNameCustomerThunk';


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { checkManager } from '../../../redux/customerSlice/customerSlice';
// import { getByNameAndIdCustomerThunk } from '../../../redux/customerSlice/getByNameAndIdCustomerThunk';


// export const LogOn = () => {
//     const dispatch = useDispatch()
//     const nav = useNavigate()
//     const isexist = useSelector(state => state.customer.isExist)

//     const cuurntUser = useSelector(state => state.customer.currentCustomer)
//     const isManager = useSelector(state => state.customer.isManager)
//     const [instituteName, setinstituteName] = useState("")
//     const [instituteId, setinstituteId] = useState("")
//     const [invalid, setInvalid] = useState(true)
//     const [noFullDetails, setNoFullDetails] = useState(true)
//     const login = async () => {
//         debugger
//         if (instituteName == "" || instituteId == "")
//             setNoFullDetails(false);

//         else {
//             setNoFullDetails(true);
//             dispatch(checkManager({ instituteId, instituteName }))
//             dispatch(getByNameAndIdCustomerThunk({ instituteName, instituteId }))
//         }
//     }

//     useEffect(() => {
//         debugger
//         if (isexist == false)
//             setInvalid(false)
//         if (isexist == true)
//             nav(`/`)
//     }, [isexist])

//     useEffect(() => {
//         if (isManager == true) {
//             nav(`/managerMenu`)
//         }
//     }, [isManager])


//     return <dialog className='onDialog' open >

//         <h1 className='shaddow'>login</h1>

//         <div className='error' hidden={invalid} >לקוח לא קיים,גש להרשמה</div>
//         <div className='error' hidden={noFullDetails}>לא הכנסת את כל הפרטים</div>

//         <Box
//             component="form"
//             sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//             noValidate
//             autoComplete="off"
//             className='shaddow'
//         >
//             <TextField id="outlined-basic" required={noFullDetails} label="שם מוסד" variant="outlined" onChange={(e) => setinstituteName(e.target.value)} className='onIn' />
//             <br />
//             <br />
//             <TextField id="outlined-basic" required={noFullDetails} label="קוד מוסד" variant="outlined" onChange={(e) => setinstituteId(e.target.value)} className='onIn' />

//         </Box>
//         <br></br>
//         <button className='onButton' onClick={login}>login</button>


//     </dialog>
// }

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { getByNameCustomerThunk } from '../../../redux/customerSlice/getByNameCustomerThunk';
import { checkManager } from '../../../redux/customerSlice/customerSlice';
import { getByNameAndIdCustomerThunk } from '../../../redux/customerSlice/getByNameAndIdCustomerThunk';

import { 
  Box, 
  TextField, 
  Button, 
  Paper, 
  Typography, 
  Container,
  Card,
  CardContent,
  CardMedia,
  InputAdornment,
  BaseInput,
  Alert,
  Fade,
  CircularProgress
} from '@mui/material';

import {
  School as SchoolIcon,
  VpnKey as VpnKeyIcon,
  Login as LoginIcon,
  HowToReg as HowToRegIcon
} from '@mui/icons-material';

import './logOn.css';
export const LogOn = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן יש להוסיף את הלוגיקה של התחברות מול השרת
    console.log('Login attempt with:', formData);
    
    // לצורך הדוגמה - ניווט חזרה לדף הבית
    // במקרה אמיתי, יש לבצע בדיקת התחברות מול השרת
    navigate('/');
  };
  const isexist = useSelector(state => state.customer.isExist);
  const cuurntUser = useSelector(state => state.customer.currentCustomer);
  const isManager = useSelector(state => state.customer.isManager);
  const loading = useSelector(state => state.customer.loading);
  
  const [instituteName, setInstituteName] = useState("");
  const [instituteId, setInstituteId] = useState("");
  const [invalid, setInvalid] = useState(true);
  const [noFullDetails, setNoFullDetails] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const login = async () => {
    if (instituteName === "" || instituteId === "") {
      setNoFullDetails(false);
    } else {
      setNoFullDetails(true);
      setIsSubmitting(true);
      dispatch(checkManager({ instituteId, instituteName }));
      dispatch(getByNameAndIdCustomerThunk({ instituteName, instituteId }));
    }
  };

  const handleRegister = () => {
    nav(`/registration/${instituteName}`);
  };

  useEffect(() => {
    if (isexist === false) {
      setInvalid(false);
      setIsSubmitting(false);
    }
    if (isexist === true) {
      nav(`/`);
    }
  }, [isexist, nav]);

  useEffect(() => {
    if (isManager === true) {
      nav(`/managerMenu`);
    }
  }, [isManager, nav]);

  return (
    <Container className="login-container">
      <Fade in={true} timeout={800}>
        <Card className="login-card">
          <Box className="login-content">
            <CardContent className="login-form-container">
              <Typography variant="h4" component="h1" className="login-title">
                <SchoolIcon className="login-title-icon" />
                התחברות למערכת
              </Typography>
              
              {!invalid && (
                <Alert 
                  severity="error" 
                  className="login-alert"
                  action={
                    <Button 
                      color="inherit" 
                      size="small" 
                      onClick={handleRegister}
                    >
                      
                    </Button>
                  }
                >
                  לקוח לא קיים במערכת
                </Alert>
              )}
              
              {!noFullDetails && (
                <Alert severity="warning" className="login-alert">
                  נא למלא את כל השדות הנדרשים
                </Alert>
              )}
              
              <Box className="login-form">
                <TextField
                  fullWidth
                  required
                  label="שם מוסד"
                  variant="outlined"
                  value={instituteName}
                  // onKeyDown={(e) => {if(e.key == "Enter")focusInput('code') }}
                  onChange={(e) => setInstituteName(e.target.value)}
                  className="login-input"
                  error={!noFullDetails && instituteName === ""}
                  helperText={!noFullDetails && instituteName === "" ? "שדה חובה" : ""}
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
                  label="קוד מוסד"
                  variant="outlined"
                  // ref={'code'}
                  value={instituteId}
                  // onKeyDown={(e) => {if(e.key == "Enter") login}}
                  onChange={(e) => setInstituteId(e.target.value)}
                  className="login-input"
                  error={!noFullDetails && instituteId === ""}
                  helperText={!noFullDetails && instituteId === "" ? "שדה חובה" : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <Box className="login-actions">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={login}
                    disabled={isSubmitting}
                    className="login-button"
                    startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
                  >
                    {isSubmitting ? "מתחבר..." : "התחברות"}
                  </Button>
                  
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={handleRegister}
                    className="register-button"
                    startIcon={<HowToRegIcon />}
                  >
                    הרשמה
                  </Button>
                </Box>
              </Box>
            </CardContent>
            
            <CardMedia
              component="div"
              className="login-image"
              image="/images/login-bg.jpg"
              title="התחברות למערכת תלבושות בתי ספר"
            >
              <div className="login-overlay">
                <Typography variant="h3" component="div" className="login-welcome">
                  ברוכים הבאים
                </Typography>
                <Typography variant="h6" component="div" className="login-subtitle">
                  מערכת ניהול תלבושות לבתי ספר
                </Typography>
              </div>
            </CardMedia>
          </Box>
        </Card>
      </Fade>
    </Container>
  );
};






