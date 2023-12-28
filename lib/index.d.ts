/**
 * Redeclare the forwardRef function so that a forwardRef-ed component can take
 * generic props
 *
 * From https://fettblog.eu/typescript-react-generic-forward-refs/
 */

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}
