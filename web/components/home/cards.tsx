<<<<<<< HEAD
import { Button } from '../ui/button';

export default function Cards() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
      <Card
=======
import { Button } from "../ui/button";

export default function Cards() {
  return (
    <div className="w-full gap-4 flex flex-col items-center justify-center md:flex-row">
      <Card 
>>>>>>> 410a511 (added sections to home)
        title="LINNENS"
        image="https://images.unsplash.com/photo-1591625591034-75d303d2e1a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Card 1"
        url="https://github.com/vercel/next.js/tree/canary/examples"
      />
<<<<<<< HEAD
      <Card
=======
      <Card 
>>>>>>> 410a511 (added sections to home)
        title="FURNITURE"
        image="https://images.unsplash.com/photo-1540730930991-a9286a5f5020?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Card 2"
        url="https://github.com/vercel/next.js/tree/canary/examples"
      />
<<<<<<< HEAD
      <Card
=======
      <Card 
>>>>>>> 410a511 (added sections to home)
        title="MATTRESSES"
        image="https://images.unsplash.com/photo-1552558636-f6a8f071c2b3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Card 3"
        url="https://github.com/vercel/next.js/tree/canary/examples"
      />
<<<<<<< HEAD
=======
      
>>>>>>> 410a511 (added sections to home)
    </div>
  );
}

type CardProps = {
  title: string;
  image: string;
  imageAlt: string;
  url: string;
<<<<<<< HEAD
};

function Card(props: CardProps) {
  return (
    <div
      className="card h-[400px] w-full max-w-md rounded-3xl bg-cover bg-center md:max-w-[30rem] lg:h-[500px]"
      style={{
        backgroundImage: `linear-gradient(191deg, rgba(0, 0, 0, 0.35) 7.65%, rgba(0, 0, 0, 0.35) 83.33%), url(${props.image})`,
      }}
    >
      <div className="content-container flex h-full flex-col items-start justify-end pb-5 pl-5">
        <h3 className="pb-4 text-3xl font-bold">
=======
}

function Card(props: CardProps) {
  return (
    <div className="card w-full h-[400px] rounded-3xl bg-cover bg-center max-w-md md:max-w-sm lg:h-[500px]" style={{ backgroundImage: `linear-gradient(191deg, rgba(0, 0, 0, 0.35) 7.65%, rgba(0, 0, 0, 0.35) 83.33%), url(${props.image})` }}>
      <div className="content-container flex flex-col justify-end items-start h-full pb-5 pl-5">
        <h3 className="text-3xl font-bold pb-4">
>>>>>>> 410a511 (added sections to home)
          <a href={props.url}>{props.title}</a>
        </h3>
        <Button className="w-48" variant="secondary" asChild>
          <a href={props.url}>See Details</a>
        </Button>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 410a511 (added sections to home)
