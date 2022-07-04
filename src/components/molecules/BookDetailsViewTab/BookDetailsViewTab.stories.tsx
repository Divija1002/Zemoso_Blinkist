import BookDetailsViewTab from ".";

export default {
  title: "components/molecules/BookDetailsViewTab",
  component: BookDetailsViewTab,
};

const passValue = (value: string) => {};

export const bookDetailsTab = () => (
  <BookDetailsViewTab passValue={passValue} />
);
