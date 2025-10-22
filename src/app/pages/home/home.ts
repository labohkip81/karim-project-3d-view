import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectionStrategy, HostListener, Input } from '@angular/core';
import Konva from 'konva';
import { MaterialModule } from '../../modules/material/material-module';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsCard } from '../../components/project-details-card/project-details-card';
import { HoverModal } from '../../components/hover-modal/hover-modal';

interface Room {
  name: string;
  points: number[][];
  color: string;
}



@Component({
  selector: 'home',
  standalone: true,
  templateUrl: "home.html",
  styleUrl: 'home.css',
  imports: [CommonModule, MaterialModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements AfterViewInit {
  @ViewChild('stageContainer', { static: true }) stageContainer!: ElementRef<HTMLDivElement>;

  @Input() imageUrl = '/morvara.webp';
  @Input() polygons: Array<Array<{ x: number; y: number }>> = [
    [
      { x: 0.42, y: 0.356 },  // was 0.256
      { x: 0.5, y: 0.356 },  // was 0.256
      { x: 0.5, y: 0.38 },  // was 0.28
      { x: 0.42, y: 0.38 },  // was 0.28
    ],
    // Original large rectangle
    [
      { x: 0.52, y: 0.456 },  // was 0.256
      { x: 0.6, y: 0.456 },  // was 0.256
      { x: 0.6, y: 0.48 },  // was 0.28
      { x: 0.52, y: 0.48 },  // was 0.28
    ]
  ];

  constructor(private dialog: MatDialog) {

  }


  private stage?: Konva.Stage;
  private layer?: Konva.Layer;
  private konvaImage?: Konva.Image;
  private imageElement?: HTMLImageElement;
  private layerScale = 1;

  selectedPolygon: number | null = null;


  ngAfterViewInit(): void {
    this.loadAndBuildStage(this.imageUrl);
    window.addEventListener('resize', this.onWindowResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onWindowResize);
    this.stage?.destroy();
  }

  private onWindowResize = () => {
    if (this.imageElement) {
      this.fitStageToContainerAndApplyScale();
    }
  };

  private loadAndBuildStage(src: string) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      this.imageElement = img;
      this.buildKonvaStage(img);
    };
  }

  private buildKonvaStage(img: HTMLImageElement) {
    const container = this.stageContainer.nativeElement;

    if (this.stage) {
      this.stage.destroy();
      this.stage = undefined;
    }

    this.stage = new Konva.Stage({
      container: container,
      width: container.clientWidth,
      height: container.clientHeight,
    });

    this.stage.draggable(true);
    this.layer = new Konva.Layer();
    this.konvaImage = new Konva.Image({
      image: img,
      x: 0,
      y: 0,
    });
    this.layer.add(this.konvaImage);

    this.polygons.forEach((polyPoints, idx) => {
      const points = this.relativeToAbsolutePoints(polyPoints, img.width, img.height);
      const konvaPoly = new Konva.Line({
        points: points,
        closed: true,
        fill: 'rgb(120,187,123, 0.5)',
        stroke: 'green',
        strokeWidth: 2,
      });

      konvaPoly.on('mouseenter', () => {
        container.style.cursor = 'pointer';
        konvaPoly.fill('rgb(120,187,123, 0.8)');
        konvaPoly.strokeWidth(3);
        this.layer?.draw();
       
      });
      konvaPoly.on('mouseleave', () => {
        container.style.cursor = 'grab';
        konvaPoly.fill('rgb(120,187,123, 0.3)');
        konvaPoly.strokeWidth(2);
        this.layer?.draw();
      });
      konvaPoly.on('click', () => this.dialog.open(HoverModal, {
        width: '400px', // optional
        position: { bottom: '50px', left: '50%' }, // bottom center
        panelClass: 'bottom-dialog', // optional for extra styling
        hasBackdrop: true, // optional
      }));

      this.layer?.add(konvaPoly);
    });

    this.stage.add(this.layer);
    this.fitStageToContainerAndApplyScale();

    container.style.cursor = 'grab';
    this.stage.on('dragstart', () => (container.style.cursor = 'grabbing'));
    this.stage.on('dragend', () => (container.style.cursor = 'grab'));
  }

  private fitStageToContainerAndApplyScale() {
    if (!this.stage || !this.layer || !this.imageElement) return;
    const container = this.stageContainer.nativeElement;
    const containerW = container.clientWidth;
    const containerH = container.clientHeight;
    const imgW = this.imageElement.width;
    const imgH = this.imageElement.height;

    const scale = Math.min(containerW / imgW, containerH / imgH, 1) * 1.4;
    this.stage.width(containerW);
    this.stage.height(containerH);

    this.layer.scale({ x: scale, y: scale });
    this.layerScale = scale;

    const scaledImgW = imgW * scale;
    const scaledImgH = imgH * scale;
    const offsetX = (containerW - scaledImgW) / 2;
    const offsetY = (containerH - scaledImgH) / 2;

    this.layer.x(offsetX);
    this.layer.y(offsetY);
    this.layer.draw();

    this.stage.x(0);
    this.stage.y(0);
  }

  private relativeToAbsolutePoints(
    relPoints: Array<{ x: number; y: number }>,
    imgWidth: number,
    imgHeight: number
  ): number[] {
    const pts: number[] = [];
    relPoints.forEach((p) => {
      pts.push(p.x * imgWidth, p.y * imgHeight);
    });
    return pts;
  }

  // 🔍 ZOOM FUNCTIONS
  zoomIn() {
    this.zoom(1.2);
  }

  zoomOut() {
    this.zoom(1 / 1.2);
  }

  private zoom(factor: number) {
    if (!this.stage || !this.layer) return;

    const oldScale = this.layer.scaleX();
    const newScale = oldScale * factor;
    let minimumZoom = 0.5;
    let maximumZoom = 5;

    // Limit zoom range
    if (newScale < minimumZoom || newScale > maximumZoom) return;

    const stage = this.stage;
    const center = {
      x: stage.width() / 2,
      y: stage.height() / 2,
    };

    // Convert center point to layer coordinates
    const layerPos = {
      x: (center.x - this.layer.x()) / oldScale,
      y: (center.y - this.layer.y()) / oldScale,
    };

    // Apply new scale
    this.layer.scale({ x: newScale, y: newScale });

    // Recenter so zoom happens toward center
    const newPos = {
      x: center.x - layerPos.x * newScale,
      y: center.y - layerPos.y * newScale,
    };

    this.layer.position(newPos);
    this.layer.batchDraw();
  }
}