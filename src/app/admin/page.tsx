import React, { FormEvent } from 'react'

const AdminPage = () => {
    const onSubmitHandle = (e: FormEvent) => {
        if (!confirm("go ahead?")) {
            e.preventDefault();
        }
    }
    return (
        <div>

        </div>
    )
}

export default AdminPage