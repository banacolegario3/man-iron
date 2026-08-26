import { Head } from '@inertiajs/react';

interface Student {
    id: number;
    first_name: string;
    last_name: string;
    birthday: string;
}

interface Props {
    students: Student[];
}

export default function Students({ students }: Props) {
    return (
        <>
            <Head title="Students" />

            <div
                style={{
                    minHeight: '100vh',
                    background: '#f3f4f6',
                    padding: '40px',
                }}
            >
                <div
                    style={{
                        maxWidth: '1000px',
                        margin: '0 auto',
                    }}
                >
                    <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
                        Students
                    </h1>

                    <p style={{ marginBottom: '20px', color: '#666' }}>
                        Total students: {students.length}
                    </p>

                    <table
                        style={{
                            width: '100%',
                            background: 'white',
                            borderCollapse: 'collapse',
                        }}
                    >
                        <thead>
                            <tr style={{ background: '#2563eb', color: 'white' }}>
                                <th style={{ padding: '15px', textAlign: 'left' }}>
                                    ID
                                </th>
                                <th style={{ padding: '15px', textAlign: 'left' }}>
                                    First Name
                                </th>
                                <th style={{ padding: '15px', textAlign: 'left' }}>
                                    Last Name
                                </th>
                                <th style={{ padding: '15px', textAlign: 'left' }}>
                                    Birthday
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        {student.id}
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        {student.first_name}
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        {student.last_name}
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        {student.birthday}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {students.length === 0 && (
                        <p style={{ padding: '30px', textAlign: 'center' }}>
                            No students found.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
