import * as Ui from '@/ui';
import * as Utils from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="pt-16 grid grid-cols-subgrid col-span-full">
      <Ui.Page.Container className="text-center max-w-[500px] mx-auto">
        <Ui.Heading.CenterStack
          heading="Page Not Found"
          subheading="The page you are looking for does not exist."
        />
      </Ui.Page.Container>
      <Ui.Page.Container className="mt-12 mx-auto">
        <Ui.Button.Secondary href="/" label="Go to Homepage" />
      </Ui.Page.Container>
    </div>
  );
}
