import Image from "next/image";
import Card from "@/components/shared/card";
import Button from "@/components/shared/button";
import downloadIcon from "@/public/assets/icons/download.svg";
import Accordion from "@/components/shared/accordion";
import AddEditNotes from "./add-edit-notes";

export default function NotesPage() {
  return (
    <div className="grid grid-cols-12 pb-6 pr-6">
      <div className="col-span-full xl:col-span-10">
        <h1 className="pb-1 text-center !font-semibold">Notes</h1>
        <p className="text-center">
          Your notes are private and only visible to you.
        </p>
        <div className="pt-5 text-right">
          <Button
            text="Open all notes (PDF)"
            variant="secondary"
            className="inline-flex items-center font-semibold"
            icon={<Image src={downloadIcon} alt="" className="mr-2.5" />}
          />
        </div>
        <Card type="recommended" className="my-6">
          <p className="h3 pb-6 !font-semibold">
            General notes on Holly Kulkarni
          </p>
          <ul className="list-disc pl-4">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              quis mauris tempor aliquet commodo consectetur tempor amet. Purus
              risus, in senectus a urna sem est, lectus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              quis mauris tempor aliquet commodo consectetur tempor amet. Purus
              risus, in senectus a urna sem est, lectus.
            </li>
          </ul>
        </Card>
        <AddEditNotes />
        <Card type="recommended" className="my-6">
          <Accordion
            title="Session 2 | March 19, 2024 @ 12:30 pm"
            className="h3 m-0 border-b-0 p-0 !font-semibold"
          >
            <ul className="list-disc pl-4 pt-6">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                quis mauris tempor aliquet commodo consectetur tempor amet.
                Purus risus, in senectus a urna sem est, lectus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                quis mauris tempor aliquet commodo consectetur tempor amet.
                Purus risus, in senectus a urna sem est, lectus.
              </li>
            </ul>
          </Accordion>
        </Card>
        <Card type="recommended" className="my-6">
          <Accordion
            title="Session 1 | March 18, 2024 @ 12:30 pm"
            className="h3 m-0 border-b-0 p-0 !font-semibold"
          >
            <ul className="list-disc pl-4 pt-6">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                quis mauris tempor aliquet commodo consectetur tempor amet.
                Purus risus, in senectus a urna sem est, lectus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                quis mauris tempor aliquet commodo consectetur tempor amet.
                Purus risus, in senectus a urna sem est, lectus.
              </li>
            </ul>
          </Accordion>
        </Card>
      </div>
    </div>
  );
}
