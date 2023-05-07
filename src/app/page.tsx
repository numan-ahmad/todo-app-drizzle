import { TodoUI } from './Todo';
import { sql } from '@vercel/postgres';

export default async function Home() {
  const { rows } = await sql`SELECT * from todo`;

  return (
    <main className='flex min-h-screen flex-col items-center'>
      <h1 className='text-center text-6xl font-bold font-mono'>Todo App</h1>
      <div>
        {rows.map((row) => (
          <div key={row.id} className='flex flex-col'>
            <p className='bold font-semibold'>Title : {row.title}</p>
            <p className='font-base'>Description : {row.description}</p>
          </div>
        ))}
      </div>
      <TodoUI></TodoUI>
    </main>
  );
}
