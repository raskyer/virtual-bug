import { useWindowVirtualizer } from '@tanstack/react-virtual';

export default function Index() {
  const virtualizer = useWindowVirtualizer({
    count: 1,
    estimateSize: () => 95,
    overscan: 2,
  });

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: virtualizer.getTotalSize(),
      }}
    >
      {virtualizer.getVirtualItems().map((item) => {
        return (
          <div
            key={item.key}
            style={{
              position: 'absolute',
              width: '100%',
              height: item.size,
              transform: `translateY(${item.start}px)`,
            }}
          >
            {render(item.index)}
          </div>
        );
      })}
    </div>
  );
}

function render(index: number) {
  return <div>{index}</div>;
}
