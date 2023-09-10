export const AppointmentEvent = ({ event }) => (
  <a className="absolute inset-1 flex flex-col items-center justify-center overflow-y-auto rounded border-[3px] border-l-8 border-blue-light bg-neutrals10 text-sm leading-6 text-neutrals">
    <p>{event.name}</p>
    <p>{event.company}</p>
  </a>
);

export const AvailableEvent = () => (
  <a className="absolute inset-1 flex bg-green-light"></a>
);

export const BufferEvent = () => (
  <a
    className="absolute inset-1 flex flex-col items-center justify-center overflow-y-auto rounded border-[3px] border-l-8 border-red text-sm leading-6 text-neutrals"
    style={{ background: "rgba(255, 255, 255, 0.85)" }} // FIXME: background color
  >
    <p>Buffer</p>
  </a>
);
