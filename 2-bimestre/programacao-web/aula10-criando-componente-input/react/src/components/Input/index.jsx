export default function Input({ label, ...rest }) {
    return (
        <div style={{ margin: "10px 0" }}>
            <label style={{ display: "block", marginBottom: "4px" }}>
                {label}
            </label>
            <input {...rest} />
        </div>
    )
}