export default function Input({ label,  ...rest }){
    return(
        <>
            <label>{label}</label>
            <input type="text" {...rest}/>
        </>
            
        
    )
}