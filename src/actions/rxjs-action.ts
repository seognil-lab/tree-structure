import { zipWith } from 'ramda';
import { fromEvent } from 'rxjs';
import { map, repeat, skipUntil, takeUntil, withLatestFrom } from 'rxjs/operators';

const mapMousePoint = map((e: MouseEvent) => [e.clientX, e.clientY]);

const getBias = $dom => [$dom.offsetLeft, $dom.offsetTop];

const move$ = fromEvent(document, 'mousemove').pipe(mapMousePoint);
const up$ = fromEvent(document, 'mouseup');

export const createDragStreamFactory = $dom => {
  const down$ = fromEvent($dom, 'mousedown').pipe(mapMousePoint);

  const mouseControl$ = move$.pipe(
    skipUntil(down$),
    takeUntil(up$),
    withLatestFrom(down$),
    repeat(),
    map(([m, s]) => [s, m]),
    map(e => e.map(zipWith((b, p) => p - b, getBias($dom)))),
  );

  return mouseControl$;
};
