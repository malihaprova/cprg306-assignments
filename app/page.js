import Link from 'next/link'

export default function Page() {
    return (
      <main>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="http://localhost:3000/week-2">Week 2 Assignment</Link>
       <div> <Link href="http://localhost:3000/week-3">Week 3 Assignment</Link>
        </div>
        <div> <Link href="http://localhost:3000/week-4">Week 4 Assignment</Link>
        </div>
      </main>
    );
}