## @lad-tech/mobydick-core/other

## ***Counter***

Счетчик с 1 до 99+

Пропсы:
type — primary, secondary, tertiary, tertiary, destructive;
count — число;
без count — будет нарисован indicator c цветом ElementError;
style — можно передать свой backgroundColor, и через top, right, bottom, left — расположить в нужном месте, по дефолту position: absolute;
size — medium(24), small(18), по default — medium;
maxLength —— по default 2, отображает максимальное заданное количество чисел;

## ***CrossedText***

Использовать, когда цвет зачеркнутой линии отличается от цвета текста, в противном случае используйте дефолтный пропс textDecorationLine: 'line-through'.

## ***Collapsible***

Не используйте `typeAnimation`: `spring` и `keyboard`, происходит краш приложения на android;


## ***Carousel***

isLoop – бесконечная карусель, вы должны понимать, что элементов в ней лучше немного использовать
isDots – не использовать, они еще в работе


## ***Dots***
fixedSize – будет работать, если элементов меньше 7
