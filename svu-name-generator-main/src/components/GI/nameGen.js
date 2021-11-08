import React, { useState } from 'react'
import {  Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, InputLabel, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material"
// import { makeStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';

import sciQuotes from './data/sciQuotes.json'
import sciFirst from './data/sciFirst.json'
import sciSuffix from '../data/sciSuffix.json'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function NameGen({closeFunction}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastName] = useState("")
  const [birthMonth, setBirthMonth] = useState("JAN")
  const [knightName, setKnightName] = useState("")
 //I didn't set gender because honestly, I wasn't about to come up with 26 more names on my own.
  

  function getQuote() {
    const firstLetter = lastName.substring(0,1).toUpperCase()
    console.log(firstLetter)
    const quote = sciQuotes[firstLetter]
    return quote
  }

  function getSuffix() {
    const lastPart = sciSuffix[birthMonth.toUpperCase()]
    return lastPart
  }

  function getName(){
    const secondLetter = firstName.substring(0,2).toUpperCase()
    console.log(secondLetter)
    const firstName = sciFirst[secondLetter]
    return firstName
    
  }

  function getNewName() {
    const quote = getQuote()
    const suffix = getSuffix()
    const firstName = getName()
    setKnightName(firstName + " " + quote + " " + suffix)
    setCurrentPage(2)
  }
   


  return (
    <>
    <Grid container  spacing={0}>
        <Grid item xs={12}>
          <Box sx={style}>
          <Box textAlign="right" alignContent="end">
              <IconButton onClick={closeFunction}  >
                  <CancelIcon sx={{color:"blue"}} fontSize='large'/>
              </IconButton>
            </Box>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Mad Scientist name, quote, and title.
            </Typography>
            <Divider/>
            {(currentPage === 1) ? (
              <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Learn your mad scientist name, your iconic quote, and your title!
              </Typography>
              <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                >

                <TextField value={firstName} onChange={e => setFirstname(e.target.value)} id="first-name" label="First Name" variant="outlined" />



                <TextField value={lastName} onChange={e => setLastName(e.target.value)} id="last-name" label="Last Name" variant="outlined" />

                <FormControl>
                      <InputLabel htmlFor="birthMonth">Birth Month</InputLabel>
                      <Select
                      
                      native
                      value={birthMonth}
                      onChange={e => setBirthMonth(e.target.value)}
                      inputProps={{
                          name: 'birthMonth',
                          id: 'birthMonth',
                      }}
                      >
                        {sciSuffix.map((option) => (
                            <option key={option.value} value={option.value}  >
                            {option.label}
                            </option>
                        ))}

                      </Select>
                  </FormControl>
                
                
                <Button onClick={getNewName} variant="outlined">Get Your Mad Scientist Name</Button>
              </Box>
              </>  
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{marginTop:"1em"}}>
                  Your Mad Scientist Name is...
                </Typography>
                <Typography id="modal-modal-title" variant="h3" component="h2" sx={{marginTop:"1em"}}>
                  {knightName}
                </Typography>
              </>
              
            )}
          </Box>
        </Grid>
    </Grid> 
    </>
  )
}

export default NameGen