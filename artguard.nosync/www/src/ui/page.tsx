import * as Utils from "@/lib/utils";

export const RootLayout = (props: React.PropsWithChildren) => {
  return <div className="root-layout">{props.children}</div>;
};

type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div className={Utils.cx("col-start-2 col-end-14", props.className)}>
      {props.children}
    </div>
  );
};
