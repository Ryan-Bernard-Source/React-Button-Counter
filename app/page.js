import Counter from "../components/counter";

export default function HomePage() {
    return (
        <main style={{padding:"2rem", fontFamily: "sans-serif"}}>
            <h1>Button Counter</h1>
        <section style = {{marginTop:"2rem"}}>
            <h2>Counter (default)</h2>
            <Counter />
        </section>
        <section style = {{marginTop:"2rem"}}>
        <h2>Counter (custom props)</h2>
        <Counter initialCounter={5} initialStep={2}></Counter>
        </section>
        </main>
    );
}