import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = { number: string; title: string; copy: string; href: string; tags: string[] };
export function ServiceCard({ number, title, copy, href, tags }: Props) {
  return (
    <Link className="service-card" href={href}>
      <div className="service-top"><span>{number}</span><ArrowUpRight size={22} /></div>
      <div><h3>{title}</h3><p>{copy}</p></div>
      <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </Link>
  );
}
