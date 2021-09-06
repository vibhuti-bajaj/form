import React from 'react'
import useForm2 from './useForm2'
import validate from './validateInfo'

const Form2 = () => {
    const {handleChange,values,handleSubmit,errors}=useForm2(validate);
    return (
        <div className="form-content-center">
            <form className="form" onSubmit={handleSubmit}>
                <h3 style={{color:'red'}}>Personal Details</h3>
                <div style={{margin:"20px"}} className="form-inputs">
                    <label className="form-label" htmlFor="name">
                        Name: 
                    <input
                    type="text"
                    name="name"
                    className="form-input"
                    value={values.name}
                    onChange={handleChange}
                   
                    >
                    </input>
                    </label>

                </div>
                {errors.name && <p>{errors.name}</p>}
                <div className="form-inputs" style={{margin:"20px"}} >
                    <label className="form-label" htmlFor="password">
                        Password: 
                    <input
                    type="password"
                    name="password"
                   
                    className="form-input"
                    value={values.password}
                    onChange={handleChange}
                    >
                    </input>
                    </label>

                </div>
                <div className="form-inputs" style={{margin:"20px"}} >
                    <label className="form-label" htmlFor="email">
                        Email: 
                    <input
                    type="email"
                    name="email"
                
                    className="form-input"
                    value={values.email}
                    onChange={handleChange}
                    >
                    </input>
                    </label>

                </div>
                <div className="form-inputs" style={{margin:"20px"}} >
                    <label className="form-label" htmlFor="gender">
                        Gender: 
                    <input
                    type="radio"
                    name="male"
                    value={values.gender}
                    onChange={handleChange}
                   
                    className="form-input"
                    />
                        Male
                    
                    <input
                    type="radio"
                    name="female"
                  
                    className="form-input"
                    />
                        Female
                    
                    </label>

                </div>
                <div className="form-inputs" style={{margin:"20px"}} >
                    <label className="form-label" htmlFor="contact">
                        Contact: 
                    <input
                    type="tel"
                    name="contact"
                    className="form-input"
                    value={values.contact}
                    onChange={handleChange}
                    >
                    </input>
                    </label>

                </div>
                <h3 style={{color:'red'}}>Educational qualifications</h3>
                <div className="form-inputs" style={{margin:"20px"}} >
                    <label className="form-label" htmlFor="degree">
                        Degree: 
                        
                        
                        <select>
                         <option value="B.E">B.E</option>
                        <option value="B.B.A">B.B.A</option>
                        <option value="B.A">B.A</option>
                      
                        </select>
                       
                        </label>

                </div>
                <div className="form-inputs" style={{margin:"20px"}} >
                    <label className="form-label" htmlFor="degree">
                        Engineering: 
                        
                        
                        <select>
                         <option value="computer">Computer </option>
                        <option value="computer science">computer Science</option>
                        <option value="mechanical">Mechanical</option>
                        <option value="civil">Civil</option>
                      
                        </select>
                   
                        </label>

                </div>
                <div className="form-inputs" style={{margin:"20px"}} >
                    <label className="form-label" htmlFor="email"></label>
                       Hobbies : 
                    <input type="checkbox" id="playingchess"  name="playing chess" value="playing chess"/>
                     Playing Chess
                    <label for="playing chess"></label>
                    <input type="checkbox" id="reading books" name="reading books" value="reading books"/>
                     Reading Books
                    <label for="reading books"></label>
                    
                </div>
                <h3 style={{color:'red'}}>Address</h3>
                <div className="form-inputs" style={{margin:"20px"}} >
                    <label className="form-label" htmlFor="name">
                        Attach Resume : 
                    <input
                    type="file"
                    name="file"
                    className="form-input"
                   
                    >
                    </input>
                    </label>

                </div>
               <div>
               <button style={{textSizeAdjust:"auto",backgroundColor:"orange",color:"white",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"50px",paddingRight:"50px",margin:"20px",textDecoration:"bold",textDecorationStyle:"solid"}} type="submit">SUBMIT</button>
               </div>
            </form>
          
        </div>
    )
}

export default Form2
