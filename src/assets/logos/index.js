import { ReactComponent as Blogr } from './blogr.svg';
import { ReactComponent as Scoot } from './scoot.svg';
import { ReactComponent as Vector } from './vector.svg';
import { ReactComponent as Officelite } from './officelite.svg';
import { ReactComponent as Pod } from './pod.svg';
import { ReactComponent as Creative } from './creative.svg';
import { ReactComponent as Pomodoro } from './pomodoro.svg';
import { ReactComponent as Maker } from './maker.svg';
import { ReactComponent as Coffeeroasters } from './coffeeroasters.svg';
import { ReactComponent as Mastercraft } from './mastercraft.svg';
import { ReactComponent as Crowdfund } from './crowdfund.svg';
import { ReactComponent as Typemaster } from './typemaster.svg';

const Logos = ({ name }) => {
  switch (name) {
    case 'blogr':
      return <Blogr />;
    case 'scoot':
      return <Scoot />;
    case 'vector':
      return <Vector />;
    case 'officelite':
      return <Officelite />;
    case 'pod':
      return <Pod />;
    case 'creative':
      return <Creative />;
    case 'pomodoro':
      return <Pomodoro />;
    case 'maker':
      return <Maker />;
    case 'coffeeroasters':
      return <Coffeeroasters />;
    case 'mastercraft':
      return <Mastercraft />;
    case 'crowdfund':
      return <Crowdfund />;
    case 'typemaster':
      return <Typemaster />;
    default:
      return <div />;
  }
}

export default Logos;
