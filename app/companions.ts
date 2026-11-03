import pengu from "./character_pengu.png";
import hoo from "./character_hoo.png";
import teto from "./character_teto.png";
export const companions = [
  { id: "penmaru", name: "ぺんまる", image: pengu, tag: "小さな「できた」を一緒に", description: "なんでもない一日の中にも、小さな成功がある。今日できたことを、一緒に見つける相棒です。", message: "今日、ちょっと嬉しかったことは？", reply: "疲れていても、ごはんを作れたんだね。それも今日のできたことだよ。" },
  { id: "hohakase", name: "ホー博士", image: hoo, tag: "気持ちを、ゆっくりひもとく", description: "落ち着いた問いかけで、出来事や気持ちを整理。自分の中にある気づきを探したい日に。", message: "今日は、どんなことが心に残りましたか？", reply: "忙しい一日でしたね。その中で、ほっとできた瞬間はありましたか？" },
  { id: "teto", name: "テト", image: teto, tag: "肩の力を抜いて、ひと息", description: "うまく話そうとしなくても大丈夫。気負わずぼやきたい日に、のんびり付き合ってくれる相棒です。", message: "おつかれさま。今日はどんな一日だった？", reply: "そんな日もあるよね。今はちょっと、ひと休みしよ。" },
] as const;
