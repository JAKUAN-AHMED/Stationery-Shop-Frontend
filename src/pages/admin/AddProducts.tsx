import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Store, Check } from "lucide-react";
import { useAddProductMutation } from "@/redux/features/products/productsApi";

const defaultValues = {
  name: "Colorful Sticky Notes",
  author: "John Doe",
  description: "A set of colorful sticky notes for office and school use.",
  category: "Sticky Notes",
  price: 5,
  stockQuantity: 250,
  brand: "NoteMaster",
  color: "Multicolor",
  size: "3x3 inches",
  material: "Paper",
  sku: "SN006",
  rating: 4,
  isFeatured: true,
  tags: ["office", "stationery", "notes"],
  discount: {
    percentage: "15",
    validUntil: "2025-12-31T23:59:59.000Z",
  },
  status: "available",
};

const AddProducts = () => {
  const [addProduct] = useAddProductMutation();
  const { handleSubmit, register } = useForm({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    let toastId = toast.loading("Loading...");
    const productData = {
      name: data.name,
      author: data.author,
      description: data.description,
      category: data.category,
      price: data.price,
      stockQuantity: data.stockQuantity,
      brand: data.brand,
      color: data.color,
      size: data.size,
      material: data.material,
      sku: data.sku,
      rating: data.rating,
      isFeatured: data.isFeatured,
      tags: data.tags,
      status: data.status,
      discount: data.discount?.percentage
        ? {
            percentage: data.discount.percentage.toString(),
            validUntil: data.discount.validUntil
              ? new Date(data.discount.validUntil).toISOString()
              : new Date().toISOString(),
          }
        : undefined,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(productData));
    if (data.productImg && data.productImg[0]) {
      formData.append("file", data.productImg[0]);
    }

    try {
      const res = await addProduct(formData);

      if (res.data) {
        toast.success(res.data.message, { id: toastId });
      }
    } catch {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Card className="max-w-3xl mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="flex font-orbitron items-center gap-2 text-xl font-semibold">
          <Store /> Add New Product
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Product Name</Label>
              <Input
                type="text"
                {...register("name")}
                placeholder="Enter product name"
                required
              />
            </div>
            <div>
              <Label>Brand</Label>
              <Input
                type="text"
                {...register("brand")}
                placeholder="Enter brand"
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label>Description</Label>
              <Textarea
                {...register("description")}
                placeholder="Enter product description"
                required
              />
            </div>
            <div>
              <Label>Price</Label>
              <Input
                type="number"
                {...register("price")}
                placeholder="Enter price"
                required
              />
            </div>
            <div>
              <Label>Stock Quantity</Label>
              <Input
                type="number"
                {...register("stockQuantity")}
                placeholder="Enter stock quantity"
                required
              />
            </div>
            <div>
              <Label>Color</Label>
              <Input
                type="text"
                {...register("color")}
                placeholder="Enter color"
                required
              />
            </div>
            <div>
              <Label>Size</Label>
              <Input
                type="text"
                {...register("size")}
                placeholder="Enter size"
                required
              />
            </div>
            <div>
              <Label>Material</Label>
              <Input
                type="text"
                {...register("material")}
                placeholder="Enter material"
                required
              />
            </div>
            <div>
              <Label>SKU</Label>
              <Input
                type="text"
                {...register("sku")}
                placeholder="Enter SKU"
                required
              />
            </div>
            <div>
              <Label>Rating</Label>
              <Input
                type="number"
                {...register("rating")}
                placeholder="Enter rating"
                min="1"
                max="5"
                required
              />
            </div>
            <div>
              <Label>Discount (%)</Label>
              <Input
                type="number"
                {...register("discount")}
                placeholder="Enter discount"
              />
            </div>
            <div>
              <Label>Tags (comma separated)</Label>
              <Input
                type="text"
                {...register("tags")}
                placeholder="Enter product tags"
              />
            </div>
            <div>
              <Label>Author</Label>
              <Input
                type="text"
                {...register("author")}
                placeholder="Enter product author"
                required
              />
            </div>
            <div>
              <Label>Category</Label>
              <select
                {...register("category")}
                defaultValue="Pencils"
                className="form-select"
              >
                <option value="Notebooks">Notebooks</option>
                <option value="Pens">Pens</option>
                <option value="Pencils">Pencils</option>
                <option value="Markers">Markers</option>
                <option value="Erasers">Erasers</option>
                <option value="Staplers">Staplers</option>
                <option value="Folders">Folders</option>
                <option value="Calculators">Calculators</option>
                <option value="Paper">Paper</option>
                <option value="Books">Books</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <Label>Status</Label>
              <Select {...register("status")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="text-purple-600 bg-black">
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  <SelectItem value="discontinued">Discontinued</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Product Image</Label>
              <Input type="file" {...register("productImg")} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="isFeatured" {...register("isFeatured")} />
              <Label htmlFor="isFeatured">Featured Product?</Label>
            </div>
          </div>
          <Button type="submit" className="w-full flex items-center gap-2">
            <Check /> Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddProducts;
